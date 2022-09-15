#!/bin/bash
node ./node-performance-test/app.js &
P1=$!
dotnet run --project ./dotnet-performance-test/dotnet-performance-test.csproj &
P2=$!
wait $P1 $P2