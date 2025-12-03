'use server';

/**
 * @fileOverview Adjusts the layout of cloned content for different screen sizes using AI.
 *
 * - adjustLayoutForScreens - A function that adjusts the layout for different screens.
 * - AdjustLayoutForScreensInput - The input type for the adjustLayoutForScreens function.
 * - AdjustLayoutForScreensOutput - The return type for the adjustLayoutForScreens function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AdjustLayoutForScreensInputSchema = z.object({
  htmlContent: z
    .string()
    .describe('The HTML content of the cloned website to be adjusted.'),
  targetScreenSize: z
    .string()
    .describe(
      'The target screen size for which the layout should be optimized (e.g., mobile, tablet, desktop).'
    ),
});

export type AdjustLayoutForScreensInput = z.infer<typeof AdjustLayoutForScreensInputSchema>;

const AdjustLayoutForScreensOutputSchema = z.object({
  adjustedHtmlContent: z
    .string()
    .describe('The HTML content adjusted for the specified screen size.'),
});

export type AdjustLayoutForScreensOutput = z.infer<typeof AdjustLayoutForScreensOutputSchema>;

export async function adjustLayoutForScreens(
  input: AdjustLayoutForScreensInput
): Promise<AdjustLayoutForScreensOutput> {
  return adjustLayoutForScreensFlow(input);
}

const adjustLayoutForScreensPrompt = ai.definePrompt({
  name: 'adjustLayoutForScreensPrompt',
  input: {schema: AdjustLayoutForScreensInputSchema},
  output: {schema: AdjustLayoutForScreensOutputSchema},
  prompt: `You are an expert in responsive web design. Given the following HTML content and a target screen size, adjust the HTML to optimize the layout for that screen size.

HTML Content:
{{{htmlContent}}}

Target Screen Size: {{{targetScreenSize}}}

Ensure that the adjusted HTML maintains the original content and visual hierarchy while adapting to the specified screen size. Focus on making the design responsive and visually appealing on the target device.

Return only the adjusted HTML content.`, // Ensure only HTML is returned
});

const adjustLayoutForScreensFlow = ai.defineFlow(
  {
    name: 'adjustLayoutForScreensFlow',
    inputSchema: AdjustLayoutForScreensInputSchema,
    outputSchema: AdjustLayoutForScreensOutputSchema,
  },
  async input => {
    const {output} = await adjustLayoutForScreensPrompt(input);
    return output!;
  }
);
