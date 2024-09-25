#!/bin/bash

# A basic bash process to check if locks are in place and if they are; to release them

	if [ ! -e "lock_file.lock" ]; then
	echo "Lock file not found . Nothing to release." #message to let us know no locks are in place
	exit 1
	
	else #Remove the lock
	
	rm "lock_file.lock"
	echo "Lock succesfully released." #message saying locks are successully gone
fi
