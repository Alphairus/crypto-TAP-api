#!/bin/bash

API=" https://whispering-depths-77462.herokuapp.com"
URL_PATH="/coins"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "coins": {
      "name": "'"${NAME}"'",
      "ticker": "'"${TICKER}"'",
      "blockchain": "'"${BLOCKCHAIN}"'"
    }
  }'
