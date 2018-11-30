#! /bin/bash

set -e

killall node &> /dev/null || true
rm -f ~/.jsipfs/repo.lock ~/.jsipfs/datastore/LOCK
