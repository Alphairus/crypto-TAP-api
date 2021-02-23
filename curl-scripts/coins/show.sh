#!/bin/sh

API=" https://whispering-depths-77462.herokuapp.com"
URL_PATH="/coins"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
