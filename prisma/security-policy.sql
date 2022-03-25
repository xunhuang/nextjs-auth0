-- this script needs to be idempotent

DO
$$BEGIN
IF EXISTS (SELECT FROM pg_roles WHERE rolname = 'abcdefg') THEN
    EXECUTE 'drop owned  by abcdefg';
END IF;
END$$;
drop policy if exists yoyoma2 on venues;
drop policy if exists yoyoma1 on venues;
drop role if exists abcdefg ;

create role abcdefg;

grant abcdefg to postgres; -- or whatever your default user is

GRANT SELECT ON "User" TO abcdefg;
GRANT SELECT ON "venues" TO abcdefg;
ALTER TABLE venues ENABLE ROW LEVEL SECURITY;

CREATE POLICY yoyoma1 ON venues FOR SELECT TO abcdefg USING (stars = '3' );
drop policy if exists yoyoma2 on venues;

create or replace FUNCTION is_current_user_admin()
  RETURNS BOOLEAN
AS $func$
  SELECT EXISTS (
    SELECT 1
    FROM "User" 
    WHERE "auth0Id" = current_setting('user.user_id')
         AND role = 'ADMIN'    
        );
$func$ LANGUAGE sql;



CREATE POLICY yoyoma2 ON venues FOR SELECT TO abcdefg 
USING (stars = '2' and is_current_user_admin())


  