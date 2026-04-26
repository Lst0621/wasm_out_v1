export {}; // ensure this .d.ts is treated as a module by TS

declare module "./wasm_sequences" {
    export interface WasmSequencesModule {
        _wasm_number_of_sequences(arr_ptr: number, arr_len: number, seq_ptr: number, seq_len: number): number;
        _wasm_number_of_sequences_all(arr_ptr: number, arr_len: number, sequence_ptr: number, seq_len: number): number;
        _malloc(size: number): number;
        _free(ptr: number): void;
    }

    const init: (moduleOverrides?: { wasmBinary?: Buffer | Uint8Array }) => Promise<WasmSequencesModule>;
    export default init;
}

