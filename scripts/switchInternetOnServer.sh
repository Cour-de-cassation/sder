#!/bin/sh

SCRIPT_NAME='switchInternetOnServer.sh'
USAGE="Usage: $SCRIPT_NAME [on | off]"

if [ $# -eq 0 ]
then
    echo $USAGE
else
  if [ $1 = "on" ]
  then
    export http_proxy='http://rie-proxy.justice.gouv.fr:8080/'
    export https_proxy='http://rie-proxy.justice.gouv.fr:8080/'
    export no_proxy='localhost,127.0.0.0,127.0.0.1,127.0.1.1'
  elif [ $1 = "off"  ]
  then
    unset http_proxy
    unset https_proxy    
    unset no_proxy
  else
    echo $USAGE
  fi
fi
