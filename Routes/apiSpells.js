import express from 'express';
const spell = express();
import { getSpell } from '../Controllers/spellController.js';
import { putSpell } from '../Controllers/spellController.js';
import { postSpell } from '../Controllers/spellController.js';
import { deleteSpell } from '../Controllers/spellController.js';

spell.get('', getSpell )

spell.post('', putSpell)

spell.put('/:id', postSpell)

spell.delete('/:id', deleteSpell)

export { spell }