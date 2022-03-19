// import { handleAuth } from '@auth0/nextjs-auth0';
// export default handleAuth();
import { handleAuth, handleCallback } from '@auth0/nextjs-auth0';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createUserIfNew = async (user: any) => {
    const existingUser = await prisma.user.findUnique({
        where: {
            email: user.email
        },
        select: {
            email: true
        }
    });

    if (!existingUser) {
        console.log("new user");
        console.dir(user, { depth: null })
        const newuser = await prisma.user.create({
            data: {
                email: user.email,
                name: user.name,
                profilePic: user.picture,
                auth0Id: user.sub,
            },
        });
        console.dir(newuser, { depth: null })
    }

    // use `console.dir` to print nested objects
    console.dir(existingUser, { depth: null })
}

const afterCallback = async (req, res, session) => {
    if (session.user) {
        createUserIfNew(session.user);
    }
    return session;
};

export default handleAuth({
    async callback(req, res) {
        try {
            await handleCallback(req, res, { afterCallback });
        } catch (error) {
            res.status(error.status || 500).end(error.message);
        }
    }
});
