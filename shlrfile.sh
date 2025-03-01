sqlcwasmfile="sqlc-plugin.wasm"
sqlc_plugin_dir="sqlc-ts-sqlite"

PS4=''

#targ dev
set -x
air &
pnpm run dev & 

wait
#endtarg

#targ gooseUp
#depends envsetup
set -x
goose up
#endtarg

#targ envsetup
source ./scripts/envsetup.sh
#endtarg

#targ clean
set -x
rm -rf dist
rm -rf tmp
#endtarg
