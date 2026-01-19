// wasm_sample.d.ts
export {}; // ensure this .d.ts is treated as a module by TS

declare module "./wasm_sample" {
    export interface WasmSampleModule {
        _wasm_minus(a: number, b: number): number;
    }

    const init: () => Promise<WasmSampleModule>;
    export default init;
}