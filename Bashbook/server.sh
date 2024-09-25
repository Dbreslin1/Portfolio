#!/bin/bash

# Function to handle cleanup
cleanup() {
    echo "Caught Ctrl+C. Releasing the lock."
    ./release.sh
    exit 0
}

# Calls the cleanup function on SIGINT (Ctrl+C)
trap cleanup SIGINT

if [ ! -p server.pipe ]; then #makes the server pipe if it doesnt already exist
    mkfifo server.pipe
fi

echo "Server running"

while true; do
	./acquire.sh #run script which acquires the lock
	
	read data < server.pipe #reads the data from the server pipe
    
	read -r id request args <<< "$data" #sets the variables id, request, and args from the data
	
    case "$request" in
        create)
            if [ ! -z "$args" ]; then #if the argument is not null
            	echo "ok: Creating "$args""
            	echo "ok: Creating "$args"" > $id.pipe
                ./create.sh "$args" > $id.pipe #sends the result of the script to the client.sh
            else
            	echo "nok: bad request"
                echo "nok: bad request" > $id.pipe
            fi
            ;;
        
        add)
            if [ ! -z "$id" ] || [ ! -z "$args" ]; then
            	echo "ok: Adding "$args" as a friend"
            	echo "ok: Adding "$args" as a friend" > $id.pipe 
                ./add_friend.sh "$id" "$args" > $id.pipe #sends the result of the script to the client.sh
            else
            	echo "nok: bad request"
                echo "nok: bad request" > $id.pipe
            fi
            ;;
        
        post)
            if [ ! -z "$id" ] || [ ! -z "$args" ]; then
                read -r receiver message <<< "$args" #sets the variables receiver,and message from args
                echo "ok: sending '"$message"' to "$receiver""
                echo "ok: sending '"$message"' to "$receiver"" > $id.pipe
                ./post_messages.sh "$id" "$receiver" "$message" > $id.pipe #sends the result of the script to the client.sh
            else 
            	echo "nok: bad request"
                echo "nok: bad request" > $id.pipe
            fi 
            ;;

        display)
            if [ ! -z "$id" ]; then
            	echo "ok: displaying wall for "$id""
            	echo "ok: displaying wall for "$id"" > $id.pipe 
                ./display_wall.sh "$id" > $id.pipe #sends the result of the script to the client.sh
            else
            	echo "nok: bad request"
                echo "nok: bad request" > $id.pipe
            fi 
            ;;
        
        *)    
            echo "Accepted commands = create|add|post|display" > $id.pipe
            exit 1
            ;;
    esac
    
    ./release.sh #releasing lock
done
