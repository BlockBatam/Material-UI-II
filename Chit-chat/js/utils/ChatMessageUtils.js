export function convertRawMessage(rawMessage, currentThreadID) {
  return {
    ...rawMessage,
    // date: new Date(rawMessage.timestamp),
    isRead: rawMessage.threadID === currentThreadID
  };
};

export function getCreatedMessageData(text, currentThreadID) {
  var timestamp = Date.now();
  return {
    id: 'm_' + timestamp,
    threadID: currentThreadID,
    authorName: 'Hary', 
    // date: new Date(timestamp),
    text: text,
    isRead: true
  };
};
