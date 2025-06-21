import { Request, Response } from 'express';
import { saveForm, getFormById } from '../models/formModel';
import { FormSchema } from '../types/form';

const createForm = async (req: Request, res: Response): Promise<void> => {
  const schema: FormSchema = req.body;
  try {
    await saveForm(schema);
    res.status(201).json({ message: 'success' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'serverError' });
  }
};

const getForm = async (req: Request<{ id: string }>, res: Response): Promise<void> => {
  const { id } = req.params;
  
  try {
    const form = await getFormById(id);
    if (!form) {
      res.status(404).json({ message: 'notFound' });
      return;
    }
    res.status(200).json(form);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'serverError' });
  }
};

export { createForm, getForm };