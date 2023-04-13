# Entities

- Game
  Game ID (unique identifier for the game)
  Game name
  Game status (e.g. waiting for players, in progress, completed)
  Game moderator ID (unique identifier for the game moderator)
  Maximum number of players
  Date and time the game was created
- Player
  Player ID (unique identifier for the player)
  Player name
  Player status (e.g. alive, dead, werewolf)
  Player role (e.g. villager, werewolf, seer, etc.)
  Player score or points (if applicable)
- Vote
  Vote ID (unique identifier for the vote)
  Player ID (unique identifier for the player being voted on)
  Game ID (unique identifier for the game in progress)
  Voter ID (unique identifier for the player who is casting the vote)
  Date and time the vote was cast
- Room
  Room ID (unique identifier for the voice chat room)
  Room name
  Game ID (unique identifier for the game the room is associated with)
  Maximum number of participants
  Date and time the room was created
- Participant
  Participant ID (unique identifier for the voice chat participant)
  Player ID (unique identifier for the player associated with the participant)
  Room ID (unique identifier for the room the participant is associated with)
  Date and time the participant joined the room
- Message (for chat messages sent in the voice chat room)
  Message ID (unique identifier for the chat message)
  Message text
  Sender ID (unique identifier for the message sender)
  Room ID (unique identifier for the room the message was sent in)
  Date and time the message was sent
- Voice Recording
  Recording ID (unique identifier for the voice recording)
  Participant ID (unique identifier for the participant who recorded the message)
  Room ID (unique identifier for the room the message was recorded in)
  Recording file (the actual audio file containing the recording)
  Date and time the recording was made

# Here are some pages and components that you might consider adding to your Werewolf app:

- Login page: This page allows users to log in to your app using their username and password.
- Registration page: This page allows new users to create an account in your app by providing their name, email address, and a password.
- Home page: This page serves as the main entry point to your app, displaying a list of available games and options to create a new game or join an existing game.
- Game lobby page: This page allows users to view the list of players who have joined the game, as well as any game settings (such as the number of werewolves and villagers).
- Game play page: This page displays the game board and allows users to select actions (such as voting for a player to be eliminated) during the game.
- Profile page: This page displays information about the user's profile, including their name, profile picture, and game statistics.
- Settings page: This page allows users to configure their preferences for the app, such as notification settings and language preferences.
- As for components, here are a few that you might consider adding to your app:
- Header component: This component appears at the top of every page and includes a navigation menu, search bar, and other app-specific options.
- Sidebar component: This component appears on the left or right side of the screen and displays additional app-specific options, such as a list of friends or recent games.
- Chat component: This component displays a chat interface where users can communicate with each other during the game.
- Player list component: This component displays a list of players who have joined the game, including their name, profile picture, and game status.
- Timer component: This component displays a countdown timer that indicates how much time is left for each phase of the game.
- Modal component: This component displays a pop-up window that provides additional information or options to the user, such as a confirmation dialog before making a critical action in the game.
