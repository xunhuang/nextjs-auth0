import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: any;
};

/** All input for the create `Post` mutation. */
export type CreatePostInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Post` to be created by this mutation. */
  post: PostInput;
};

/** The output of our create `Post` mutation. */
export type CreatePostPayload = {
  __typename?: 'CreatePostPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Post` that was created by this mutation. */
  post?: Maybe<Post>;
  /** An edge for our `Post`. May be used by Relay 1. */
  postEdge?: Maybe<PostsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Post`. */
  userByAuthorId?: Maybe<User>;
};


/** The output of our create `Post` mutation. */
export type CreatePostPayloadPostEdgeArgs = {
  orderBy?: InputMaybe<Array<PostsOrderBy>>;
};

/** All input for the create `_PrismaMigration` mutation. */
export type CreatePrismaMigrationInput = {
  /** The `_PrismaMigration` to be created by this mutation. */
  _prismaMigration: _PrismaMigrationInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our create `_PrismaMigration` mutation. */
export type CreatePrismaMigrationPayload = {
  __typename?: 'CreatePrismaMigrationPayload';
  /** The `_PrismaMigration` that was created by this mutation. */
  _prismaMigration?: Maybe<_PrismaMigration>;
  /** An edge for our `_PrismaMigration`. May be used by Relay 1. */
  _prismaMigrationEdge?: Maybe<_PrismaMigrationsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `_PrismaMigration` mutation. */
export type CreatePrismaMigrationPayload_PrismaMigrationEdgeArgs = {
  orderBy?: InputMaybe<Array<_PrismaMigrationsOrderBy>>;
};

/** All input for the create `User` mutation. */
export type CreateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `User` to be created by this mutation. */
  user: UserInput;
};

/** The output of our create `User` mutation. */
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was created by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our create `User` mutation. */
export type CreateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** All input for the create `Venue` mutation. */
export type CreateVenueInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Venue` to be created by this mutation. */
  venue: VenueInput;
};

/** The output of our create `Venue` mutation. */
export type CreateVenuePayload = {
  __typename?: 'CreateVenuePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Venue` that was created by this mutation. */
  venue?: Maybe<Venue>;
  /** An edge for our `Venue`. May be used by Relay 1. */
  venueEdge?: Maybe<VenuesEdge>;
};


/** The output of our create `Venue` mutation. */
export type CreateVenuePayloadVenueEdgeArgs = {
  orderBy?: InputMaybe<Array<VenuesOrderBy>>;
};

/** All input for the `deletePostById` mutation. */
export type DeletePostByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deletePost` mutation. */
export type DeletePostInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Post` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Post` mutation. */
export type DeletePostPayload = {
  __typename?: 'DeletePostPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedPostId?: Maybe<Scalars['ID']>;
  /** The `Post` that was deleted by this mutation. */
  post?: Maybe<Post>;
  /** An edge for our `Post`. May be used by Relay 1. */
  postEdge?: Maybe<PostsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Post`. */
  userByAuthorId?: Maybe<User>;
};


/** The output of our delete `Post` mutation. */
export type DeletePostPayloadPostEdgeArgs = {
  orderBy?: InputMaybe<Array<PostsOrderBy>>;
};

/** All input for the `deletePrismaMigrationById` mutation. */
export type DeletePrismaMigrationByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
};

/** All input for the `deletePrismaMigration` mutation. */
export type DeletePrismaMigrationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `_PrismaMigration` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `_PrismaMigration` mutation. */
export type DeletePrismaMigrationPayload = {
  __typename?: 'DeletePrismaMigrationPayload';
  /** The `_PrismaMigration` that was deleted by this mutation. */
  _prismaMigration?: Maybe<_PrismaMigration>;
  /** An edge for our `_PrismaMigration`. May be used by Relay 1. */
  _prismaMigrationEdge?: Maybe<_PrismaMigrationsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedPrismaMigrationId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `_PrismaMigration` mutation. */
export type DeletePrismaMigrationPayload_PrismaMigrationEdgeArgs = {
  orderBy?: InputMaybe<Array<_PrismaMigrationsOrderBy>>;
};

/** All input for the `deleteUserById` mutation. */
export type DeleteUserByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteUser` mutation. */
export type DeleteUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `User` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedUserId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was deleted by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our delete `User` mutation. */
export type DeleteUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** All input for the `deleteVenueByKey` mutation. */
export type DeleteVenueByKeyInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  key: Scalars['String'];
};

/** All input for the `deleteVenue` mutation. */
export type DeleteVenueInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Venue` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Venue` mutation. */
export type DeleteVenuePayload = {
  __typename?: 'DeleteVenuePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedVenueId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Venue` that was deleted by this mutation. */
  venue?: Maybe<Venue>;
  /** An edge for our `Venue`. May be used by Relay 1. */
  venueEdge?: Maybe<VenuesEdge>;
};


/** The output of our delete `Venue` mutation. */
export type DeleteVenuePayloadVenueEdgeArgs = {
  orderBy?: InputMaybe<Array<VenuesOrderBy>>;
};

/** All input for the `isCurrentUserAdmin` mutation. */
export type IsCurrentUserAdminInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our `isCurrentUserAdmin` mutation. */
export type IsCurrentUserAdminPayload = {
  __typename?: 'IsCurrentUserAdminPayload';
  boolean?: Maybe<Scalars['Boolean']>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Post`. */
  createPost?: Maybe<CreatePostPayload>;
  /** Creates a single `_PrismaMigration`. */
  createPrismaMigration?: Maybe<CreatePrismaMigrationPayload>;
  /** Creates a single `User`. */
  createUser?: Maybe<CreateUserPayload>;
  /** Creates a single `Venue`. */
  createVenue?: Maybe<CreateVenuePayload>;
  /** Deletes a single `Post` using its globally unique id. */
  deletePost?: Maybe<DeletePostPayload>;
  /** Deletes a single `Post` using a unique key. */
  deletePostById?: Maybe<DeletePostPayload>;
  /** Deletes a single `_PrismaMigration` using its globally unique id. */
  deletePrismaMigration?: Maybe<DeletePrismaMigrationPayload>;
  /** Deletes a single `_PrismaMigration` using a unique key. */
  deletePrismaMigrationById?: Maybe<DeletePrismaMigrationPayload>;
  /** Deletes a single `User` using its globally unique id. */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUserById?: Maybe<DeleteUserPayload>;
  /** Deletes a single `Venue` using its globally unique id. */
  deleteVenue?: Maybe<DeleteVenuePayload>;
  /** Deletes a single `Venue` using a unique key. */
  deleteVenueByKey?: Maybe<DeleteVenuePayload>;
  isCurrentUserAdmin?: Maybe<IsCurrentUserAdminPayload>;
  /** Updates a single `Post` using its globally unique id and a patch. */
  updatePost?: Maybe<UpdatePostPayload>;
  /** Updates a single `Post` using a unique key and a patch. */
  updatePostById?: Maybe<UpdatePostPayload>;
  /** Updates a single `_PrismaMigration` using its globally unique id and a patch. */
  updatePrismaMigration?: Maybe<UpdatePrismaMigrationPayload>;
  /** Updates a single `_PrismaMigration` using a unique key and a patch. */
  updatePrismaMigrationById?: Maybe<UpdatePrismaMigrationPayload>;
  /** Updates a single `User` using its globally unique id and a patch. */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUserById?: Maybe<UpdateUserPayload>;
  /** Updates a single `Venue` using its globally unique id and a patch. */
  updateVenue?: Maybe<UpdateVenuePayload>;
  /** Updates a single `Venue` using a unique key and a patch. */
  updateVenueByKey?: Maybe<UpdateVenuePayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePostArgs = {
  input: CreatePostInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePrismaMigrationArgs = {
  input: CreatePrismaMigrationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateVenueArgs = {
  input: CreateVenueInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePostArgs = {
  input: DeletePostInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePostByIdArgs = {
  input: DeletePostByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePrismaMigrationArgs = {
  input: DeletePrismaMigrationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePrismaMigrationByIdArgs = {
  input: DeletePrismaMigrationByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByIdArgs = {
  input: DeleteUserByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteVenueArgs = {
  input: DeleteVenueInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteVenueByKeyArgs = {
  input: DeleteVenueByKeyInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationIsCurrentUserAdminArgs = {
  input: IsCurrentUserAdminInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePostArgs = {
  input: UpdatePostInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePostByIdArgs = {
  input: UpdatePostByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePrismaMigrationArgs = {
  input: UpdatePrismaMigrationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePrismaMigrationByIdArgs = {
  input: UpdatePrismaMigrationByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByIdArgs = {
  input: UpdateUserByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateVenueArgs = {
  input: UpdateVenueInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateVenueByKeyArgs = {
  input: UpdateVenueByKeyInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
};

export type Post = Node & {
  __typename?: 'Post';
  authorId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['Datetime'];
  id: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['Datetime'];
  /** Reads a single `User` that is related to this `Post`. */
  userByAuthorId?: Maybe<User>;
};

/** A condition to be used against `Post` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type PostCondition = {
  /** Checks for equality with the object’s `authorId` field. */
  authorId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `published` field. */
  published?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** An input for mutations affecting `Post` */
export type PostInput = {
  authorId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['Int']>;
  published?: InputMaybe<Scalars['Boolean']>;
  title: Scalars['String'];
  updatedAt: Scalars['Datetime'];
};

/** Represents an update to a `Post`. Fields that are set will be updated. */
export type PostPatch = {
  authorId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['Int']>;
  published?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** A connection to a list of `Post` values. */
export type PostsConnection = {
  __typename?: 'PostsConnection';
  /** A list of edges which contains the `Post` and cursor to aid in pagination. */
  edges: Array<PostsEdge>;
  /** A list of `Post` objects. */
  nodes: Array<Post>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Post` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Post` edge in the connection. */
export type PostsEdge = {
  __typename?: 'PostsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Post` at the end of the edge. */
  node: Post;
};

/** Methods to use when ordering `Post`. */
export enum PostsOrderBy {
  AuthorIdAsc = 'AUTHOR_ID_ASC',
  AuthorIdDesc = 'AUTHOR_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  PublishedAsc = 'PUBLISHED_ASC',
  PublishedDesc = 'PUBLISHED_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /** Reads a single `_PrismaMigration` using its globally unique `ID`. */
  _prismaMigration?: Maybe<_PrismaMigration>;
  _prismaMigrationById?: Maybe<_PrismaMigration>;
  /** Reads and enables pagination through a set of `Post`. */
  allPosts?: Maybe<PostsConnection>;
  /** Reads and enables pagination through a set of `_PrismaMigration`. */
  allPrismaMigrations?: Maybe<_PrismaMigrationsConnection>;
  /** Reads and enables pagination through a set of `User`. */
  allUsers?: Maybe<UsersConnection>;
  /** Reads and enables pagination through a set of `Venue`. */
  allVenues?: Maybe<VenuesConnection>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /** Reads a single `Post` using its globally unique `ID`. */
  post?: Maybe<Post>;
  postById?: Maybe<Post>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** Reads a single `User` using its globally unique `ID`. */
  user?: Maybe<User>;
  userById?: Maybe<User>;
  /** Reads a single `Venue` using its globally unique `ID`. */
  venue?: Maybe<Venue>;
  venueByKey?: Maybe<Venue>;
};


/** The root query type which gives access points into the data universe. */
export type Query_PrismaMigrationArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type Query_PrismaMigrationByIdArgs = {
  id: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAllPostsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PostCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PostsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllPrismaMigrationsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<_PrismaMigrationCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<_PrismaMigrationsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllUsersArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllVenuesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<VenueCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<VenuesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPostArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPostByIdArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByIdArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryVenueArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryVenueByKeyArgs = {
  key: Scalars['String'];
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

/** All input for the `updatePostById` mutation. */
export type UpdatePostByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `Post` being updated. */
  postPatch: PostPatch;
};

/** All input for the `updatePost` mutation. */
export type UpdatePostInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Post` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Post` being updated. */
  postPatch: PostPatch;
};

/** The output of our update `Post` mutation. */
export type UpdatePostPayload = {
  __typename?: 'UpdatePostPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Post` that was updated by this mutation. */
  post?: Maybe<Post>;
  /** An edge for our `Post`. May be used by Relay 1. */
  postEdge?: Maybe<PostsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Post`. */
  userByAuthorId?: Maybe<User>;
};


/** The output of our update `Post` mutation. */
export type UpdatePostPayloadPostEdgeArgs = {
  orderBy?: InputMaybe<Array<PostsOrderBy>>;
};

/** All input for the `updatePrismaMigrationById` mutation. */
export type UpdatePrismaMigrationByIdInput = {
  /** An object where the defined keys will be set on the `_PrismaMigration` being updated. */
  _prismaMigrationPatch: _PrismaMigrationPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
};

/** All input for the `updatePrismaMigration` mutation. */
export type UpdatePrismaMigrationInput = {
  /** An object where the defined keys will be set on the `_PrismaMigration` being updated. */
  _prismaMigrationPatch: _PrismaMigrationPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `_PrismaMigration` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `_PrismaMigration` mutation. */
export type UpdatePrismaMigrationPayload = {
  __typename?: 'UpdatePrismaMigrationPayload';
  /** The `_PrismaMigration` that was updated by this mutation. */
  _prismaMigration?: Maybe<_PrismaMigration>;
  /** An edge for our `_PrismaMigration`. May be used by Relay 1. */
  _prismaMigrationEdge?: Maybe<_PrismaMigrationsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `_PrismaMigration` mutation. */
export type UpdatePrismaMigrationPayload_PrismaMigrationEdgeArgs = {
  orderBy?: InputMaybe<Array<_PrismaMigrationsOrderBy>>;
};

/** All input for the `updateUserById` mutation. */
export type UpdateUserByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
};

/** All input for the `updateUser` mutation. */
export type UpdateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `User` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
};

/** The output of our update `User` mutation. */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was updated by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our update `User` mutation. */
export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** All input for the `updateVenueByKey` mutation. */
export type UpdateVenueByKeyInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  key: Scalars['String'];
  /** An object where the defined keys will be set on the `Venue` being updated. */
  venuePatch: VenuePatch;
};

/** All input for the `updateVenue` mutation. */
export type UpdateVenueInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Venue` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Venue` being updated. */
  venuePatch: VenuePatch;
};

/** The output of our update `Venue` mutation. */
export type UpdateVenuePayload = {
  __typename?: 'UpdateVenuePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Venue` that was updated by this mutation. */
  venue?: Maybe<Venue>;
  /** An edge for our `Venue`. May be used by Relay 1. */
  venueEdge?: Maybe<VenuesEdge>;
};


/** The output of our update `Venue` mutation. */
export type UpdateVenuePayloadVenueEdgeArgs = {
  orderBy?: InputMaybe<Array<VenuesOrderBy>>;
};

export type User = Node & {
  __typename?: 'User';
  auth0Id: Scalars['String'];
  createdAt: Scalars['Datetime'];
  email: Scalars['String'];
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `Post`. */
  postsByAuthorId: PostsConnection;
  profilePic?: Maybe<Scalars['String']>;
  role: Role;
};


export type UserPostsByAuthorIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PostCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PostsOrderBy>>;
};

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `auth0Id` field. */
  auth0Id?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `profilePic` field. */
  profilePic?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `role` field. */
  role?: InputMaybe<Role>;
};

/** An input for mutations affecting `User` */
export type UserInput = {
  auth0Id: Scalars['String'];
  createdAt?: InputMaybe<Scalars['Datetime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  profilePic?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
};

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  auth0Id?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  profilePic?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
};

/** A connection to a list of `User` values. */
export type UsersConnection = {
  __typename?: 'UsersConnection';
  /** A list of edges which contains the `User` and cursor to aid in pagination. */
  edges: Array<UsersEdge>;
  /** A list of `User` objects. */
  nodes: Array<User>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `User` edge in the connection. */
export type UsersEdge = {
  __typename?: 'UsersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `User` at the end of the edge. */
  node: User;
};

/** Methods to use when ordering `User`. */
export enum UsersOrderBy {
  Auth0IdAsc = 'AUTH0_ID_ASC',
  Auth0IdDesc = 'AUTH0_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ProfilePicAsc = 'PROFILE_PIC_ASC',
  ProfilePicDesc = 'PROFILE_PIC_DESC',
  RoleAsc = 'ROLE_ASC',
  RoleDesc = 'ROLE_DESC'
}

export type Venue = Node & {
  __typename?: 'Venue';
  accomondation?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  area?: Maybe<Scalars['String']>;
  autodetected?: Maybe<Scalars['String']>;
  bookatableClientid?: Maybe<Scalars['String']>;
  bookatablePartnerCode?: Maybe<Scalars['String']>;
  bookingnotes?: Maybe<Scalars['String']>;
  businessId?: Maybe<Scalars['String']>;
  businessid?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  close?: Maybe<Scalars['Boolean']>;
  closehours?: Maybe<Scalars['String']>;
  connectionid?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  countryIso?: Maybe<Scalars['String']>;
  coverImage?: Maybe<Scalars['String']>;
  creationTime?: Maybe<Scalars['String']>;
  cuisine?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  devnotes?: Maybe<Scalars['String']>;
  distinction?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fulladdress?: Maybe<Scalars['String']>;
  guide?: Maybe<Scalars['String']>;
  imageList?: Maybe<Scalars['String']>;
  key: Scalars['String'];
  latitude?: Maybe<Scalars['Float']>;
  localarea?: Maybe<Scalars['String']>;
  localname?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  menuurl?: Maybe<Scalars['String']>;
  metro?: Maybe<Scalars['String']>;
  michelinId?: Maybe<Scalars['String']>;
  michelineOnlineReservation?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  oldImages?: Maybe<Scalars['String']>;
  openhours?: Maybe<Scalars['String']>;
  otherReservation?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  priceline?: Maybe<Scalars['String']>;
  realurl?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  reservation?: Maybe<Scalars['String']>;
  reservationHint?: Maybe<Scalars['String']>;
  reservationUrl?: Maybe<Scalars['String']>;
  resyCityCode?: Maybe<Scalars['String']>;
  resyUrlSlug?: Maybe<Scalars['String']>;
  rsvpSupport?: Maybe<Scalars['String']>;
  sf?: Maybe<Scalars['String']>;
  showvenue?: Maybe<Scalars['Boolean']>;
  stars?: Maybe<Scalars['String']>;
  streetUsps?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  tockUrlSlug?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  urlSlug?: Maybe<Scalars['String']>;
  vintage?: Maybe<Scalars['String']>;
  withOnlineReservation?: Maybe<Scalars['String']>;
  workqueue?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

/** A condition to be used against `Venue` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type VenueCondition = {
  /** Checks for equality with the object’s `accomondation` field. */
  accomondation?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `address` field. */
  address?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `area` field. */
  area?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `autodetected` field. */
  autodetected?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `bookatableClientid` field. */
  bookatableClientid?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `bookatablePartnerCode` field. */
  bookatablePartnerCode?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `bookingnotes` field. */
  bookingnotes?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `businessId` field. */
  businessId?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `businessid` field. */
  businessid?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `city` field. */
  city?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `close` field. */
  close?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `closehours` field. */
  closehours?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `connectionid` field. */
  connectionid?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `country` field. */
  country?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `countryIso` field. */
  countryIso?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `coverImage` field. */
  coverImage?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `creationTime` field. */
  creationTime?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `cuisine` field. */
  cuisine?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `currency` field. */
  currency?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `devnotes` field. */
  devnotes?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `distinction` field. */
  distinction?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `fulladdress` field. */
  fulladdress?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `guide` field. */
  guide?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `imageList` field. */
  imageList?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `key` field. */
  key?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `latitude` field. */
  latitude?: InputMaybe<Scalars['Float']>;
  /** Checks for equality with the object’s `localarea` field. */
  localarea?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `localname` field. */
  localname?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `longitude` field. */
  longitude?: InputMaybe<Scalars['Float']>;
  /** Checks for equality with the object’s `menuurl` field. */
  menuurl?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `metro` field. */
  metro?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `michelinId` field. */
  michelinId?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `michelineOnlineReservation` field. */
  michelineOnlineReservation?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `oldImages` field. */
  oldImages?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `openhours` field. */
  openhours?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `otherReservation` field. */
  otherReservation?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `phone` field. */
  phone?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `priceline` field. */
  priceline?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `realurl` field. */
  realurl?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `region` field. */
  region?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `reservation` field. */
  reservation?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `reservationHint` field. */
  reservationHint?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `reservationUrl` field. */
  reservationUrl?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `resyCityCode` field. */
  resyCityCode?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `resyUrlSlug` field. */
  resyUrlSlug?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `rsvpSupport` field. */
  rsvpSupport?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `sf` field. */
  sf?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `showvenue` field. */
  showvenue?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `stars` field. */
  stars?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `streetUsps` field. */
  streetUsps?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `tags` field. */
  tags?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `timezone` field. */
  timezone?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `tockUrlSlug` field. */
  tockUrlSlug?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `url` field. */
  url?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `urlSlug` field. */
  urlSlug?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `vintage` field. */
  vintage?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `withOnlineReservation` field. */
  withOnlineReservation?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `workqueue` field. */
  workqueue?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `zip` field. */
  zip?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `Venue` */
export type VenueInput = {
  accomondation?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  area?: InputMaybe<Scalars['String']>;
  autodetected?: InputMaybe<Scalars['String']>;
  bookatableClientid?: InputMaybe<Scalars['String']>;
  bookatablePartnerCode?: InputMaybe<Scalars['String']>;
  bookingnotes?: InputMaybe<Scalars['String']>;
  businessId?: InputMaybe<Scalars['String']>;
  businessid?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  close?: InputMaybe<Scalars['Boolean']>;
  closehours?: InputMaybe<Scalars['String']>;
  connectionid?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  countryIso?: InputMaybe<Scalars['String']>;
  coverImage?: InputMaybe<Scalars['String']>;
  creationTime?: InputMaybe<Scalars['String']>;
  cuisine?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  devnotes?: InputMaybe<Scalars['String']>;
  distinction?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  fulladdress?: InputMaybe<Scalars['String']>;
  guide?: InputMaybe<Scalars['String']>;
  imageList?: InputMaybe<Scalars['String']>;
  key: Scalars['String'];
  latitude?: InputMaybe<Scalars['Float']>;
  localarea?: InputMaybe<Scalars['String']>;
  localname?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['Float']>;
  menuurl?: InputMaybe<Scalars['String']>;
  metro?: InputMaybe<Scalars['String']>;
  michelinId?: InputMaybe<Scalars['String']>;
  michelineOnlineReservation?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  oldImages?: InputMaybe<Scalars['String']>;
  openhours?: InputMaybe<Scalars['String']>;
  otherReservation?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  priceline?: InputMaybe<Scalars['String']>;
  realurl?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  reservation?: InputMaybe<Scalars['String']>;
  reservationHint?: InputMaybe<Scalars['String']>;
  reservationUrl?: InputMaybe<Scalars['String']>;
  resyCityCode?: InputMaybe<Scalars['String']>;
  resyUrlSlug?: InputMaybe<Scalars['String']>;
  rsvpSupport?: InputMaybe<Scalars['String']>;
  sf?: InputMaybe<Scalars['String']>;
  showvenue?: InputMaybe<Scalars['Boolean']>;
  stars?: InputMaybe<Scalars['String']>;
  streetUsps?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['String']>;
  timezone?: InputMaybe<Scalars['String']>;
  tockUrlSlug?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  urlSlug?: InputMaybe<Scalars['String']>;
  vintage?: InputMaybe<Scalars['String']>;
  withOnlineReservation?: InputMaybe<Scalars['String']>;
  workqueue?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

/** Represents an update to a `Venue`. Fields that are set will be updated. */
export type VenuePatch = {
  accomondation?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  area?: InputMaybe<Scalars['String']>;
  autodetected?: InputMaybe<Scalars['String']>;
  bookatableClientid?: InputMaybe<Scalars['String']>;
  bookatablePartnerCode?: InputMaybe<Scalars['String']>;
  bookingnotes?: InputMaybe<Scalars['String']>;
  businessId?: InputMaybe<Scalars['String']>;
  businessid?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  close?: InputMaybe<Scalars['Boolean']>;
  closehours?: InputMaybe<Scalars['String']>;
  connectionid?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  countryIso?: InputMaybe<Scalars['String']>;
  coverImage?: InputMaybe<Scalars['String']>;
  creationTime?: InputMaybe<Scalars['String']>;
  cuisine?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  devnotes?: InputMaybe<Scalars['String']>;
  distinction?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  fulladdress?: InputMaybe<Scalars['String']>;
  guide?: InputMaybe<Scalars['String']>;
  imageList?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  localarea?: InputMaybe<Scalars['String']>;
  localname?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['Float']>;
  menuurl?: InputMaybe<Scalars['String']>;
  metro?: InputMaybe<Scalars['String']>;
  michelinId?: InputMaybe<Scalars['String']>;
  michelineOnlineReservation?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  oldImages?: InputMaybe<Scalars['String']>;
  openhours?: InputMaybe<Scalars['String']>;
  otherReservation?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  priceline?: InputMaybe<Scalars['String']>;
  realurl?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  reservation?: InputMaybe<Scalars['String']>;
  reservationHint?: InputMaybe<Scalars['String']>;
  reservationUrl?: InputMaybe<Scalars['String']>;
  resyCityCode?: InputMaybe<Scalars['String']>;
  resyUrlSlug?: InputMaybe<Scalars['String']>;
  rsvpSupport?: InputMaybe<Scalars['String']>;
  sf?: InputMaybe<Scalars['String']>;
  showvenue?: InputMaybe<Scalars['Boolean']>;
  stars?: InputMaybe<Scalars['String']>;
  streetUsps?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['String']>;
  timezone?: InputMaybe<Scalars['String']>;
  tockUrlSlug?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  urlSlug?: InputMaybe<Scalars['String']>;
  vintage?: InputMaybe<Scalars['String']>;
  withOnlineReservation?: InputMaybe<Scalars['String']>;
  workqueue?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `Venue` values. */
export type VenuesConnection = {
  __typename?: 'VenuesConnection';
  /** A list of edges which contains the `Venue` and cursor to aid in pagination. */
  edges: Array<VenuesEdge>;
  /** A list of `Venue` objects. */
  nodes: Array<Venue>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Venue` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Venue` edge in the connection. */
export type VenuesEdge = {
  __typename?: 'VenuesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Venue` at the end of the edge. */
  node: Venue;
};

/** Methods to use when ordering `Venue`. */
export enum VenuesOrderBy {
  AccomondationAsc = 'ACCOMONDATION_ASC',
  AccomondationDesc = 'ACCOMONDATION_DESC',
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC',
  AreaAsc = 'AREA_ASC',
  AreaDesc = 'AREA_DESC',
  AutodetectedAsc = 'AUTODETECTED_ASC',
  AutodetectedDesc = 'AUTODETECTED_DESC',
  BookatableClientidAsc = 'BOOKATABLE_CLIENTID_ASC',
  BookatableClientidDesc = 'BOOKATABLE_CLIENTID_DESC',
  BookatablePartnerCodeAsc = 'BOOKATABLE_PARTNER_CODE_ASC',
  BookatablePartnerCodeDesc = 'BOOKATABLE_PARTNER_CODE_DESC',
  BookingnotesAsc = 'BOOKINGNOTES_ASC',
  BookingnotesDesc = 'BOOKINGNOTES_DESC',
  BusinessidAsc = 'BUSINESSID_ASC',
  BusinessidDesc = 'BUSINESSID_DESC',
  BusinessIdAsc = 'BUSINESS_ID_ASC',
  BusinessIdDesc = 'BUSINESS_ID_DESC',
  CityAsc = 'CITY_ASC',
  CityDesc = 'CITY_DESC',
  ClosehoursAsc = 'CLOSEHOURS_ASC',
  ClosehoursDesc = 'CLOSEHOURS_DESC',
  CloseAsc = 'CLOSE_ASC',
  CloseDesc = 'CLOSE_DESC',
  ConnectionidAsc = 'CONNECTIONID_ASC',
  ConnectionidDesc = 'CONNECTIONID_DESC',
  CountryAsc = 'COUNTRY_ASC',
  CountryDesc = 'COUNTRY_DESC',
  CountryIsoAsc = 'COUNTRY_ISO_ASC',
  CountryIsoDesc = 'COUNTRY_ISO_DESC',
  CoverImageAsc = 'COVER_IMAGE_ASC',
  CoverImageDesc = 'COVER_IMAGE_DESC',
  CreationTimeAsc = 'CREATION_TIME_ASC',
  CreationTimeDesc = 'CREATION_TIME_DESC',
  CuisineAsc = 'CUISINE_ASC',
  CuisineDesc = 'CUISINE_DESC',
  CurrencyAsc = 'CURRENCY_ASC',
  CurrencyDesc = 'CURRENCY_DESC',
  DevnotesAsc = 'DEVNOTES_ASC',
  DevnotesDesc = 'DEVNOTES_DESC',
  DistinctionAsc = 'DISTINCTION_ASC',
  DistinctionDesc = 'DISTINCTION_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  FulladdressAsc = 'FULLADDRESS_ASC',
  FulladdressDesc = 'FULLADDRESS_DESC',
  GuideAsc = 'GUIDE_ASC',
  GuideDesc = 'GUIDE_DESC',
  ImageListAsc = 'IMAGE_LIST_ASC',
  ImageListDesc = 'IMAGE_LIST_DESC',
  KeyAsc = 'KEY_ASC',
  KeyDesc = 'KEY_DESC',
  LatitudeAsc = 'LATITUDE_ASC',
  LatitudeDesc = 'LATITUDE_DESC',
  LocalareaAsc = 'LOCALAREA_ASC',
  LocalareaDesc = 'LOCALAREA_DESC',
  LocalnameAsc = 'LOCALNAME_ASC',
  LocalnameDesc = 'LOCALNAME_DESC',
  LongitudeAsc = 'LONGITUDE_ASC',
  LongitudeDesc = 'LONGITUDE_DESC',
  MenuurlAsc = 'MENUURL_ASC',
  MenuurlDesc = 'MENUURL_DESC',
  MetroAsc = 'METRO_ASC',
  MetroDesc = 'METRO_DESC',
  MichelineOnlineReservationAsc = 'MICHELINE_ONLINE_RESERVATION_ASC',
  MichelineOnlineReservationDesc = 'MICHELINE_ONLINE_RESERVATION_DESC',
  MichelinIdAsc = 'MICHELIN_ID_ASC',
  MichelinIdDesc = 'MICHELIN_ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  OldImagesAsc = 'OLD_IMAGES_ASC',
  OldImagesDesc = 'OLD_IMAGES_DESC',
  OpenhoursAsc = 'OPENHOURS_ASC',
  OpenhoursDesc = 'OPENHOURS_DESC',
  OtherReservationAsc = 'OTHER_RESERVATION_ASC',
  OtherReservationDesc = 'OTHER_RESERVATION_DESC',
  PhoneAsc = 'PHONE_ASC',
  PhoneDesc = 'PHONE_DESC',
  PricelineAsc = 'PRICELINE_ASC',
  PricelineDesc = 'PRICELINE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RealurlAsc = 'REALURL_ASC',
  RealurlDesc = 'REALURL_DESC',
  RegionAsc = 'REGION_ASC',
  RegionDesc = 'REGION_DESC',
  ReservationAsc = 'RESERVATION_ASC',
  ReservationDesc = 'RESERVATION_DESC',
  ReservationHintAsc = 'RESERVATION_HINT_ASC',
  ReservationHintDesc = 'RESERVATION_HINT_DESC',
  ReservationUrlAsc = 'RESERVATION_URL_ASC',
  ReservationUrlDesc = 'RESERVATION_URL_DESC',
  ResyCityCodeAsc = 'RESY_CITY_CODE_ASC',
  ResyCityCodeDesc = 'RESY_CITY_CODE_DESC',
  ResyUrlSlugAsc = 'RESY_URL_SLUG_ASC',
  ResyUrlSlugDesc = 'RESY_URL_SLUG_DESC',
  RsvpSupportAsc = 'RSVP_SUPPORT_ASC',
  RsvpSupportDesc = 'RSVP_SUPPORT_DESC',
  SfAsc = 'SF_ASC',
  SfDesc = 'SF_DESC',
  ShowvenueAsc = 'SHOWVENUE_ASC',
  ShowvenueDesc = 'SHOWVENUE_DESC',
  StarsAsc = 'STARS_ASC',
  StarsDesc = 'STARS_DESC',
  StreetUspsAsc = 'STREET_USPS_ASC',
  StreetUspsDesc = 'STREET_USPS_DESC',
  TagsAsc = 'TAGS_ASC',
  TagsDesc = 'TAGS_DESC',
  TimezoneAsc = 'TIMEZONE_ASC',
  TimezoneDesc = 'TIMEZONE_DESC',
  TockUrlSlugAsc = 'TOCK_URL_SLUG_ASC',
  TockUrlSlugDesc = 'TOCK_URL_SLUG_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  UrlSlugAsc = 'URL_SLUG_ASC',
  UrlSlugDesc = 'URL_SLUG_DESC',
  VintageAsc = 'VINTAGE_ASC',
  VintageDesc = 'VINTAGE_DESC',
  WithOnlineReservationAsc = 'WITH_ONLINE_RESERVATION_ASC',
  WithOnlineReservationDesc = 'WITH_ONLINE_RESERVATION_DESC',
  WorkqueueAsc = 'WORKQUEUE_ASC',
  WorkqueueDesc = 'WORKQUEUE_DESC',
  ZipAsc = 'ZIP_ASC',
  ZipDesc = 'ZIP_DESC'
}

export type _PrismaMigration = Node & {
  __typename?: '_PrismaMigration';
  appliedStepsCount: Scalars['Int'];
  checksum: Scalars['String'];
  finishedAt?: Maybe<Scalars['Datetime']>;
  id: Scalars['String'];
  logs?: Maybe<Scalars['String']>;
  migrationName: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  rolledBackAt?: Maybe<Scalars['Datetime']>;
  startedAt: Scalars['Datetime'];
};

/**
 * A condition to be used against `_PrismaMigration` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type _PrismaMigrationCondition = {
  /** Checks for equality with the object’s `appliedStepsCount` field. */
  appliedStepsCount?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `checksum` field. */
  checksum?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `finishedAt` field. */
  finishedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `logs` field. */
  logs?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `migrationName` field. */
  migrationName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `rolledBackAt` field. */
  rolledBackAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `startedAt` field. */
  startedAt?: InputMaybe<Scalars['Datetime']>;
};

/** An input for mutations affecting `_PrismaMigration` */
export type _PrismaMigrationInput = {
  appliedStepsCount?: InputMaybe<Scalars['Int']>;
  checksum: Scalars['String'];
  finishedAt?: InputMaybe<Scalars['Datetime']>;
  id: Scalars['String'];
  logs?: InputMaybe<Scalars['String']>;
  migrationName: Scalars['String'];
  rolledBackAt?: InputMaybe<Scalars['Datetime']>;
  startedAt?: InputMaybe<Scalars['Datetime']>;
};

/** Represents an update to a `_PrismaMigration`. Fields that are set will be updated. */
export type _PrismaMigrationPatch = {
  appliedStepsCount?: InputMaybe<Scalars['Int']>;
  checksum?: InputMaybe<Scalars['String']>;
  finishedAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['String']>;
  logs?: InputMaybe<Scalars['String']>;
  migrationName?: InputMaybe<Scalars['String']>;
  rolledBackAt?: InputMaybe<Scalars['Datetime']>;
  startedAt?: InputMaybe<Scalars['Datetime']>;
};

/** A connection to a list of `_PrismaMigration` values. */
export type _PrismaMigrationsConnection = {
  __typename?: '_PrismaMigrationsConnection';
  /** A list of edges which contains the `_PrismaMigration` and cursor to aid in pagination. */
  edges: Array<_PrismaMigrationsEdge>;
  /** A list of `_PrismaMigration` objects. */
  nodes: Array<_PrismaMigration>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `_PrismaMigration` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `_PrismaMigration` edge in the connection. */
export type _PrismaMigrationsEdge = {
  __typename?: '_PrismaMigrationsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `_PrismaMigration` at the end of the edge. */
  node: _PrismaMigration;
};

/** Methods to use when ordering `_PrismaMigration`. */
export enum _PrismaMigrationsOrderBy {
  AppliedStepsCountAsc = 'APPLIED_STEPS_COUNT_ASC',
  AppliedStepsCountDesc = 'APPLIED_STEPS_COUNT_DESC',
  ChecksumAsc = 'CHECKSUM_ASC',
  ChecksumDesc = 'CHECKSUM_DESC',
  FinishedAtAsc = 'FINISHED_AT_ASC',
  FinishedAtDesc = 'FINISHED_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  LogsAsc = 'LOGS_ASC',
  LogsDesc = 'LOGS_DESC',
  MigrationNameAsc = 'MIGRATION_NAME_ASC',
  MigrationNameDesc = 'MIGRATION_NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RolledBackAtAsc = 'ROLLED_BACK_AT_ASC',
  RolledBackAtDesc = 'ROLLED_BACK_AT_DESC',
  StartedAtAsc = 'STARTED_AT_ASC',
  StartedAtDesc = 'STARTED_AT_DESC'
}

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = { __typename?: 'Query', allUsers?: { __typename?: 'UsersConnection', edges: Array<{ __typename?: 'UsersEdge', node: { __typename?: 'User', id: number, email: string, name?: string | null } }> } | null };

export type BayAreaVenuesQueryVariables = Exact<{ [key: string]: never; }>;


export type BayAreaVenuesQuery = { __typename?: 'Query', allVenues?: { __typename?: 'VenuesConnection', totalCount: number, nodes: Array<{ __typename?: 'Venue', key: string, name?: string | null, stars?: string | null }> } | null };


export const AllUsersDocument = gql`
    query AllUsers {
  allUsers {
    edges {
      node {
        id
        email
        name
      }
    }
  }
}
    `;

/**
 * __useAllUsersQuery__
 *
 * To run a query within a React component, call `useAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
      }
export function useAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
        }
export type AllUsersQueryHookResult = ReturnType<typeof useAllUsersQuery>;
export type AllUsersLazyQueryHookResult = ReturnType<typeof useAllUsersLazyQuery>;
export type AllUsersQueryResult = Apollo.QueryResult<AllUsersQuery, AllUsersQueryVariables>;
export const BayAreaVenuesDocument = gql`
    query BayAreaVenues {
  allVenues(first: 10, condition: {metro: "bayarea"}) {
    nodes {
      key
      name
      stars
    }
    totalCount
  }
}
    `;

/**
 * __useBayAreaVenuesQuery__
 *
 * To run a query within a React component, call `useBayAreaVenuesQuery` and pass it any options that fit your needs.
 * When your component renders, `useBayAreaVenuesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBayAreaVenuesQuery({
 *   variables: {
 *   },
 * });
 */
export function useBayAreaVenuesQuery(baseOptions?: Apollo.QueryHookOptions<BayAreaVenuesQuery, BayAreaVenuesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BayAreaVenuesQuery, BayAreaVenuesQueryVariables>(BayAreaVenuesDocument, options);
      }
export function useBayAreaVenuesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BayAreaVenuesQuery, BayAreaVenuesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BayAreaVenuesQuery, BayAreaVenuesQueryVariables>(BayAreaVenuesDocument, options);
        }
export type BayAreaVenuesQueryHookResult = ReturnType<typeof useBayAreaVenuesQuery>;
export type BayAreaVenuesLazyQueryHookResult = ReturnType<typeof useBayAreaVenuesLazyQuery>;
export type BayAreaVenuesQueryResult = Apollo.QueryResult<BayAreaVenuesQuery, BayAreaVenuesQueryVariables>;