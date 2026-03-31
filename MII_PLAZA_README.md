# Mii Plaza - Owner Documentation

## Overview
The Mii Plaza is an interactive widget where visitors can create simple characters that appear in an animated plaza on your main page.

## How It Works

### For Visitors:
1. Visitors use the character creator to choose head and body colors
2. They can optionally enter their name (explained as only visible to site owner)
3. When they click "Add to Plaza", their character appears in the animated plaza
4. Characters "bop" up and down and move randomly around

### For You (Site Owner):

#### Viewing Character Authors
When visitors create characters, their names are:
- Stored in the browser's localStorage temporarily
- Logged to the browser console for you to copy
- Displayed when you hover over characters in the plaza (format: "Character #X by AuthorName")

#### Making Characters Permanent
Since GitHub doesn't allow visitors to directly write to files, new characters are stored in localStorage. To make them permanent:

1. When a visitor creates a character, they'll see a message telling them you need to update the file
2. The character data is logged to the browser console in JSON format
3. Copy the JSON from the console and update `mii_plaza_data.json`
4. Commit and push the updated file to GitHub

#### Manually Adding Characters
You can manually add characters by editing `mii_plaza_data.json`:

```json
[
  {
    "headColor": "#FFD1A3",
    "bodyColor": "#FF6B6B",
    "author": "Author Name",
    "timestamp": "2024-01-15T12:00:00.000Z"
  }
]
```

- `headColor`: Hex color code for the character's head
- `bodyColor`: Hex color code for the character's body
- `author`: The name of who created it (your secret field!)
- `timestamp`: When it was created (ISO 8601 format)

#### Moderating Characters
Simply edit `mii_plaza_data.json` to:
- Remove unwanted characters
- Change colors if needed
- Update author names

## Files
- `mii_plaza.html` - The widget itself
- `mii_plaza_data.json` - Character database (edit this to manage characters)
- `README.md` - Main page (includes the widget via iframe)

## Future Improvements
If you want to make character creation fully automatic, you could:
- Set up a GitHub Action to accept character submissions
- Create a simple backend service to handle submissions
- Use GitHub Issues as a character submission system
