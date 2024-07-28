"use server";

import { ID, Query } from "node-appwrite";

import {
  BUCKET_ID,
  database,
  DATABASE_ID,
  ENDPOINT,
  PATIENT_COLLECTION_ID,
  PROJECT_ID,
  storage,
  users,
} from "../appwrite.config";
import { parseStringify } from "../utils";

import {InputFile} from "node-appwrite/file";

// CREATE APPWRITE USER
export const createUser = async (user: CreateUserParams) => {
  try {
    // Create new user -> https://appwrite.io/docs/references/1.5.x/server-nodejs/users#create
    const newuser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );

    console.log({ newuser });

    return parseStringify(newuser);
  } catch (error: any) {
    // Check existing user
    if (error && error?.code === 409) {
      const existingUser = await users.list([
        Query.equal("email", [user.email]),
      ]);

      return existingUser.users[0];
    }
}
}


export const getUser = async (userId: string) => {
  try {
    const user = await users.get(userId); 

    return
  } catch (error) {
    console.log(error);
  }
}

export const registerPatient = async ({identificationDocument,...patient}: RegisterUserParams) => {
  try {
    let file;

    if(identificationDocument) {
      const inputFile = InputFile.fromBuffer(
        identificationDocument?.get('blobFile') as Blob,
        identificationDocument?.get('fileName') as string,
      );

      file = await storage.createFile(BUCKET_ID!,ID.unique(),inputFile)
    }
    const patient = await database.createDocument(
      DATABASE_ID!,
      PATIENT_COLLECTION_ID!,
      ID.unique(),
      {
        
      }
    )
  } catch (error) {
    console.log(error);
  }
}