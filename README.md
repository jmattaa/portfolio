# yeah it's me


> [!caution] 
> rn, we be using react router and that works like shit with the go server
> FIX IT

the vision is that we can serve our react files, and the react files communicate
through a api endpoint in the go server.

then we have a sqlite db to store the writing stuff and we have a admin page
to write this stuff.

jonathan you've done this shi before you can fix this 🔥

## stuff we need in the .env (not .env.goose, cuz it be commited)
```ini
DEV=(true|false)
PORT=

DB_SOURCE

API_KEY=

ADMIN_USER=
ADMIN_PASS="hashed-pass"

# then we gotta do goose stuff but it's done from the `envsetup.sh` script
# or `shlrfile.sh`
```
