import { fade } from 'svelte/transition';
import { tick } from 'svelte';

/**
 * @param {{ style: { backgroundColor: string; }; dispatchEvent: (arg0: CustomEvent<any>) => void; addEventListener: (arg0: string, arg1: (event: any) => Promise<void>) => void; removeEventListener: (arg0: string, arg1: (event: any) => Promise<void>) => void; }} node
 */
export function smoothTransition(node) {
    const handleClick = async (/** @type {{ preventDefault: () => void; currentTarget: { getAttribute: (arg0: string) => any; }; }} */ event) => {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        // Add a noticeable style change
        node.style.backgroundColor = 'yellow';
        console.log('transition triggered!');
        await tick(); // Ensures the transition starts before routing
        node.dispatchEvent(new CustomEvent('startTransition'));

        setTimeout(() => {
            window.location.href = href;
        }, 200); // Duration should match your fade out duration
    };

    node.addEventListener('click', handleClick);

    return {
        destroy() {
            node.removeEventListener('click', handleClick);
        },
        update() {
            // update logic if necessary
        }
    };
}

/**
 * @param {HTMLAnchorElement} node
 */
export function testAction(node) {
    const handleClick = () => {
        console.log('Click detected');
    };

    node.addEventListener('click', handleClick);

    return {
        destroy() {
            node.removeEventListener('click', handleClick);
        }
    };
}

