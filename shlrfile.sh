sqlcwasmfile="sqlc-plugin.wasm"
sqlc_plugin_dir="sqlc-ts-sqlite"

PS4=''

#targ run
set -x
# this is shit rn, fix it so we can do dev stuff
pnpm run build
go run main.go
#endtarg

#targ gooseUp
#depends envsetup
set -x
goose up
#endtarg

#targ envsetup
source ./scripts/envsetup.sh
#endtarg

#targ setup_git_filters
source ./scripts/git_filters.sh
setup_ignore_sha_filter
#endtarg

