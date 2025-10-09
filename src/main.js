git filter-branch --env-filter '
OLD_EMAIL="oganyan.sargis20@mail.ru"
CORRECT_NAME="Sargis"
CORRECT_EMAIL="sargis.oganyan.04@mail.ru"
if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
  then
export GIT_COMMITTER_NAME="$CORRECT_NAME"
export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
  then
export GIT_AUTHOR_NAME="$CORRECT_NAME"
export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags