#! /bin/bash

killall node || true
rm -f ~/.jsipfs/repo.lock ~/.jsipfs/datastore/LOCK
