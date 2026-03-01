#!/bin/bash

# Script to commit only wasm_sample.js and wasm_sample.wasm if they are the only files changed

# Get list of changed files
changed_files=$(git diff --name-only --diff-filter=ACMRU)

# Count changed files
file_count=$(echo "$changed_files" | wc -l)

# Check if changed_files is empty
if [ -z "$changed_files" ]; then
    echo "No files changed. Nothing to commit."
    exit 0
fi

# Expected files
expected_files=("wasm_sample.js" "wasm_sample.wasm")

# Check if only expected files are changed
is_valid=true
while IFS= read -r file; do
    # Skip empty lines
    if [ -z "$file" ]; then
        continue
    fi

    # Check if file is in expected_files
    found=false
    for expected in "${expected_files[@]}"; do
        if [[ "$file" == *"$expected" ]]; then
            found=true
            break
        fi
    done

    if [ "$found" = false ]; then
        echo "Error: Unexpected file changed: $file"
        is_valid=false
    fi
done <<< "$changed_files"

if [ "$is_valid" = false ]; then
    echo "Only wasm_sample.js and wasm_sample.wasm should be changed. Aborting commit."
    exit 1
fi

# Get current UTC timestamp (up to second)
timestamp=$(date -u +"%Y-%m-%d %H:%M:%S UTC")

# Add only the expected files
git add wasm_sample.js wasm_sample.wasm

# Create commit message
commit_message="compile on $timestamp"

# Commit
git commit -m "$commit_message"

if [ $? -eq 0 ]; then
    echo "✅ Successfully committed: $commit_message"
else
    echo "⚠️ Commit failed or nothing to commit"
fi
