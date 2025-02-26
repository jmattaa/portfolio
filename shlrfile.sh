sqlcwasmfile="sqlc-plugin.wasm"
sqlc_plugin_dir="sqlc-ts-sqlite"

PS4=''

#targ dev
set -x
pnpm run build
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

