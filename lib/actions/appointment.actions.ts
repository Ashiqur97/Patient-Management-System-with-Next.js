import { ID } from "node-appwrite";
import { APPOINTMENT_COLLECTION_ID, DATABASE_ID, databases } from "../appwrite.config";
import { parseStringify } from "../utils";

export const  createAppointment = async () {
    try {
        const newPatient = await databases.createDocument(
            DATABASE_ID!,
            APPOINTMENT_COLLECTION_ID!,
            ID.unique(),
            {
                ...patient
            }
        )
        return parseStringify(newPatient);
    } catch (error) {
        console.error(error);
    }
}