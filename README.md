One time setup

yarn install

# start the db 
yarn db

# add .env.local file 

DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
AUTH0_SECRET=a47da55d3c21b15dd5f80a0947364ad60c3fdc2a862ab9ef8ad001b78c88672f
AUTH0_BASE_URL=http://localhost:3000
AUTH0_ISSUER_BASE_URL='https://dev-4q8dshdr.us.auth0.com'
AUTH0_CLIENT_ID='kY6yCHjdpONnpr3GOREjW41WWsQW8RZF'
AUTH0_CLIENT_SECRET='flBGWZqFHaws1NPazSsfjpK3-Jejim8VlqlAYIIjrj_82h6Wnqi7pkukdHIZu-Ey'
AUTH0_AUDIENCE=ablslsdhwheshss
AUTH0_SCOPE='openid profile email read:shows'

# not sure why Prisma's not reading .env.local file
export DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb"

npx prisma migrate dev

# initial policy
psql -Atx $DATABASE_URL < prisma/security-policy.sql                         
psql -Atx $DATABASE_URL < prisma/venue_data_insert_only.sql

# start server
yarn dev

http://localhost:3000/

Login 

Click sample graphql
Click venues

change the user from user to admin somehow

See the venue list change 

# after initial setup
yarn db  # to start the the db
yarn dev to start the dev server
yarn generate to start the watch modeo of the .graphql file changes