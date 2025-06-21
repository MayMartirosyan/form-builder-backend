import pool from "../db";
import { FormSchema } from "../types/form";

const saveForm = async (schema: FormSchema): Promise<void> => {
  await pool.query(
    "INSERT INTO forms (id, name, schema) VALUES ($1, $2, $3) ON CONFLICT (id) DO UPDATE SET name = $2, schema = $3",
    ["1", schema.name, JSON.stringify(schema.fields)]
  );
};

const getFormById = async (id:string): Promise<FormSchema | null> => {
  // TODO: in future we can get dynamic forms , now we will get only 1 form with id '1'

  const result = await pool.query(
    "SELECT id, name, schema FROM forms WHERE id = $1",
    [id]
  );
  
  if (result.rows.length === 0) {
    return null;
  }
  return {
    id: result.rows[0].id,
    name: result.rows[0].name,
    fields: result.rows[0].schema,
  };
};

export { saveForm, getFormById };
