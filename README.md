# SDER Administration of the database

Here, we handle all the SDER database administration.

The validations schemas are stored here.

The interaction with the SDER database is done through an API

## SDER DB API

#### GET `/decisions-to-pseudonymise`:

Parameter: `date: Date`

Return: All the decisions to pseudonymise

#### GET `/pseudonymisation-to-export`:

Parameter: ()

Return: All the pseudonymisation texts to export along with their decision id

#### PATCH `/update-label-status`:

Parameter:

- `decisionIds: Array<number>`
- `labelStatus: 'toBeTreated' | 'loaded' | 'done' | 'exported'`

Return: ()

Effect: Update the label status of the given decisions

#### PATCH `/update-decision-pseudonymisation`:

Parameter:

- `decisionId: number`
- `decisionPseudonymisedText: string`
- `labelTreatments: array of treatments of LABEL`

Return: ()

Effect: Update the pseudonymisation text and the label treatment of the given decision

#### POST `/create-decision`:

Parameter: all the fields of a decision
Return: ()

Effect: Create a new decision
