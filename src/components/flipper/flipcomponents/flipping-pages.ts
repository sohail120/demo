import {
    FlippingPagesWithPointerControls,
    FlippingPagesWithPointerControlsProps,
} from './pointer-controls';

export type FlippingPagesProps = FlippingPagesWithPointerControlsProps;

const FlippingPages = FlippingPagesWithPointerControls;
FlippingPages.displayName = 'FlippingPages';
export { FlippingPages };
