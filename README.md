# Text Diff

Simple tool to compare two markdown text files (hardcoded strings in this instance) and highlight changed, added or removed sections.

### To run

```
npm install
```

then

```
npm run dev
```

### Stack

Uses the following

-   React
-   Typescript
-   NextUI/Tailwind
-   Vite

### Potential Improvements

-   Add Jest testing - Be good to know that the helpers/diff file has been properly tested for all edge cases.
-   Move the text strings from helpers/strings to their own .txt files or display two textareas allowing for live a updating diff.
-   Flesh out useDiff hook to get the contents of the above files/textareas and handle diff check inside the hook.
