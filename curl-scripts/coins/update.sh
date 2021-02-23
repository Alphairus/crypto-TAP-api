#!/bin/bash

API=" https://whispering-depths-77462.herokuapp.com"
URL_PATH="/coins"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
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
