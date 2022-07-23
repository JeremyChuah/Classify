/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      subject
      content
      classID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      subject
      content
      classID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      subject
      content
      classID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateClass = /* GraphQL */ `
  subscription OnCreateClass {
    onCreateClass {
      id
      name
      enjoyment
      difficulty
      load
      homework
      entries
      Comments {
        items {
          id
          subject
          content
          classID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateClass = /* GraphQL */ `
  subscription OnUpdateClass {
    onUpdateClass {
      id
      name
      enjoyment
      difficulty
      load
      homework
      entries
      Comments {
        items {
          id
          subject
          content
          classID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteClass = /* GraphQL */ `
  subscription OnDeleteClass {
    onDeleteClass {
      id
      name
      enjoyment
      difficulty
      load
      homework
      entries
      Comments {
        items {
          id
          subject
          content
          classID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
