import image from './assets/logo.png'
import {ImageBlock, TextBlock, TextColumns, TitleBlock} from './classes/blocks'

export const model = [
    new TitleBlock('Test title', {
        styles: 'background: black; color: gray; padding: 10px',
        tag: 'h2'
    }),

    new ImageBlock(image, {
        styles: 'padding: 2rem 0; display: flex; justify-content: center',
        imageStyles: 'width: 1000px; height: auto',
        alt: 'logo image'
    }),

    new TextBlock('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda, eligendi hic impedit iure magnam', {
        styles: 'background: gray; color: black; padding: 10px'
    }),

    new TextColumns([
        '1 text',
        '2 text',
        '3 text'
    ], {
        styles: 'padding: 10px'
    }),
]
