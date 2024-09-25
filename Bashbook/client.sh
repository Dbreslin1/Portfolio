#!/bin/bash

id=$1 #initial arguement passed, in this case user's name 
if [ -z "$id" ]; then
	echo "No parameter was given, do better >:("
	exit 1
fi

if [ ! -p server.pipe ]; then #creates the server pipe if it doesnt exist
   mkfifo server.pipe
fi

if [ ! -p "$id.pipe" ]; then #creates the client pipe if it doesnt exist
    mkfifo $id.pipe
fi

while [ ! -z "$id" ]; do #while the name passed in is not null

	read -p "Enter a request (req [args]): "  request args
	
	if [ ! -z "$request" ] ||  [ ! -z "$args" ]; then
		#send request and args to server through pipeline
		echo "$id" "$request" "$args" > server.pipe
		
		for ((i=0; i<2; i++)); do #prints out both lines from the server.sh
		
		#receive response 
		read line < $id.pipe
		
		#print response
		case "$line" in
		  ok:*)
		  	echo "SUCCESS: ${line#ok:}" #replaces ok: with SUCCESS: and prints out the rest of the line
		  	;;
		  nok:*)
		  	echo "ERROR: ${line#nok:}" #replaces nok: with ERROR: and prints out the rest of the line
		  	;;
		  start_of_file*)
		  	echo "$(echo "$line" | sed 's/start_of_file//; s/end_of_file//')" 
		  	#doesnt print out start_of_file and end_of_file

		  	;;
		  *)
		  	echo "$line"
		  	;;
		esac
		
		done
		  
		  	
	else
		echo "You have to enter both a request and an argument"
	fi 

done
