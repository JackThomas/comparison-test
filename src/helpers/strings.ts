// Would have preferred to store these as .txt files, but ran out of time.

const prevString = `# Header That Has Updated Content
Suggested Wordsmith edits to the tracked doc go here, showcasing what changes we are applying with inline editing TBD
# Header That Remains Unchanged
Content of an unchanged section.
# Also Unchanged Header
Unchanged content of unchanged header.
# Deleted Header
Sometimes it can be deletion.`;

const nextString = `# Header That Has Updated Content
Suggested Wordsmith changes to the redlined document go here, showcasing what changes we are applying with web UI
# New Header
Sometimes it is multiple paragraph insertion.
This paragraph has been inserted, nothing was removed.
# Header That Remains Unchanged
Content of an unchanged section.
# Also Unchanged Header
Unchanged content of unchanged header.`;

export { prevString, nextString };
