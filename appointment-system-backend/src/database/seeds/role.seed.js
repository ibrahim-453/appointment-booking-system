import Role from "../models/role.model.js";
import { ROLES } from "../../utils/constants.js";

const seedRoles = async () => {
  try {
    const roles = [
      {
        name: ROLES.USER,
        description: "Regular user",
      },
      {
        name: ROLES.PROFESSIONAL,
        description: "Professional user",
      },
      {
        name: ROLES.ADMIN,
        description: "Admin user",
      },
      {
        name: ROLES.SUPER_ADMIN,
        description: "Super Admin user",
      },
    ];

    for (const role of roles) {
      await Role.updateOne(
        {
          name: role.name,
        },
        {
          $setOnInsert: role,
        },
        {
          upsert: true,
        },
      );
    }

    console.log("Roles seeded successfully");
  } catch (error) {
    console.error("Role seeding failed:", error);
  }
};

export default seedRoles;