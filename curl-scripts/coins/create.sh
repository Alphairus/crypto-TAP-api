#!/bin/bash

API="http://localhost:4741"
URL_PATH="/coins"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "coin": {
      "name": "'"${NAME}"'",
      "ticker": "'"${TICKER}"'",
      "blockchain": "'"${BLOCKCHAIN}"'"
    }
  }'

  echo
