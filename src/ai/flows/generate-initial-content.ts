'use server';

/**
 * @fileOverview Clones a website's content and layout from a given URL.
 *
 * - generateInitialContent - Clones the site content and adapts the layout.
 * - GenerateInitialContentInput - The input type for generateInitialContent function.
 * - GenerateInitialContentOutput - The return type for generateInitialContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateInitialContentInputSchema = z.object({
  url: z.string().describe('The URL of the website to clone.'),
});
export type GenerateInitialContentInput = z.infer<
  typeof GenerateInitialContentInputSchema
>;

const GenerateInitialContentOutputSchema = z.object({
  content: z.string().describe('The HTML content of the cloned website.'),
});
export type GenerateInitialContentOutput = z.infer<
  typeof GenerateInitialContentOutputSchema
>;

export async function generateInitialContent(
  input: GenerateInitialContentInput
): Promise<GenerateInitialContentOutput> {
  return generateInitialContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'cloneSitePrompt',
  input: {schema: GenerateInitialContentInputSchema},
  output: {schema: GenerateInitialContentOutputSchema},
  prompt: `You are an expert web developer tasked with cloning the content and layout of a website from a given URL.

  Your goal is to extract the core HTML structure and content from the provided URL and adapt it for use in a modern web application.  Preserve layout and visual hierarchy as much as possible.

  Here is the URL of the website to clone: {{{url}}}

  Return only the HTML content. Do not include any introductory or concluding remarks.
  `,
});

const generateInitialContentFlow = ai.defineFlow(
  {
    name: 'generateInitialContentFlow',
    inputSchema: GenerateInitialContentInputSchema,
    outputSchema: GenerateInitialContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
