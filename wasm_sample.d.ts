// wasm_sample.d.ts
export {}; // ensure this .d.ts is treated as a module by TS

declare module "./wasm_sample" {
    export interface WasmSampleModule {
        _wasm_number_of_sequences(arr_ptr: number, arr_len: number, seq_ptr: number, seq_len: number): number;
    }

    const init: () => Promise<WasmSampleModule>;
    export default init;
}