import { Schema, model, models } from "mongoose";
import { User } from "@/types/server/user";

const UserSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: [true, "El nombre es obligatorio"],
    },
    image: {
      type: String,
      required: [true, "La imagen es obligatoria"],
    },
    state: {
      type: Boolean,
      default: true,
    },
    instrument: [
      {
        type: String,
        required: true,
      },
    ],
  },
  {
    // add "createdAt" "updatedAt"
    timestamps: true,
    // Delete "__v" in the document
    versionKey: false,
  }
);

// Esto no lo cambia en la BD
// Cambia en el retorno
UserSchema.methods.toJSON = function () {
  // Seleccionamos lo que no queremos mostrar
  // y al ...user le agregamos uid
  const { __v, password, _id, ...user } = this.toObject();
  user.uid = _id;
  return user;
};

// Para no crear cada rato un nuevo modelo en caso ya exista lo usamos
export const UserModel = models.UserModel || model("user", UserSchema);
