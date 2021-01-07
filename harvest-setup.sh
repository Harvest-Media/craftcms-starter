#!/bin/bash

printf "\n\n"
printf "Removing .gitignore and copying over the new one.\n\n"

rm .gitignore
mv .gitignore.project .gitignore

printf "Copying Repo Project Config to Temporary Folder\n\n"
mv ./config/project/ ./config/project-temp

printf "Running Craft Setup\n\n"
./craft setup

printf "\n\n"
printf "Now removing craft default project config and moving repo project config back"

rm -rf ./config/project
mv ./config/project-temp ./config/project

printf "Now go to the public directory, run valet link, and then load the Craft CP and login."
