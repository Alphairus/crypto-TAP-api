#!/bin/bash

API=" https://whispering-depths-77462.herokuapp.com"
URL_PATH="/coins"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
