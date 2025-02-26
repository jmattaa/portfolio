#!/usr/bin/env bash

ENV_FILE=".env"
GOOSE_ENV_FILE=".env.goose"

setupenv() {
    if [ ! -f "$GOOSE_ENV_FILE" ]; then
        echo " Error: $GOOSE_ENV_FILE not found!"
        return
    fi

    if [ ! -f "$ENV_FILE" ]; then
        echo " $ENV_FILE not found. Creating a new one..."
        touch "$ENV_FILE"
    fi

    NEW_LINES=$(grep -Fvx -f "$ENV_FILE" "$GOOSE_ENV_FILE") # some fire stuff here

    if [ -z "$NEW_LINES" ]; then
        echo " No changes needed."
        return
    fi

    # append missing lines to .env
    echo "$NEW_LINES" >> "$ENV_FILE"
    echo " Appended missing lines from $GOOSE_ENV_FILE to $ENV_FILE."
}

setupenv

