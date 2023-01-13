import { z } from "zod";

const genders = ["male", "female"] as const

const PersonSchema = z.object({
  name: z.string(),
  age: z.number().default(18),
  job: z.string().optional(),
  isAlive: z.boolean(),
  gender: z.enum(genders)
});

type Person = z.infer<typeof PersonSchema>

const person1 = { name: "Akif", isAlive: true, gender: "male", unwantedProp: "unwantedProp" };
const person2 = { name: 77 };


console.log(PersonSchema.safeParse(person1))
console.log(PersonSchema.safeParse(person2))

console.log(PersonSchema.parse(person1))
console.log(PersonSchema.parse(person2))
