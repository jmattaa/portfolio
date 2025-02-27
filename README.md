# yeah it's me


the vision is that we can serve our react files, and the react files communicate
through a api endpoint in the go server.

then we have a sqlite db to store the writing stuff and we have a admin page
to write this stuff. The admin can be done with normal go templating stuff
it dosen't have to look good cuz it's only for me to use.

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
