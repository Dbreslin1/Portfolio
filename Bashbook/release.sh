#!/bin/bash

# Check if the lock file exists

	if [ ! -e "lock_file.lock" ]; then
	echo "Lock file not found . Nothing to release."
	exit 1
	
	else
	#Remove the lock file
	rm "lock_file.lock"
	echo "Lock succesfully released."
fi
