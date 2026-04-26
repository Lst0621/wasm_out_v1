export {}; // ensure this .d.ts is treated as a module by TS

declare module "./wasm_matrix" {
    export interface WasmMatrixModule {
        _wasm_get_gl_n_zm_size(n: number, m: number): number;
        _wasm_get_gl_n_zm(n: number, m: number, out_count_ptr: number): number;
        _wasm_is_matrix_group(data_ptr: number, count: number, n: number, modulus: number): number;
        _wasm_matrix_det(data_ptr: number, n: number): number;
        _wasm_matrix_inverse_mod(data_ptr: number, n: number, m: number, out_ptr: number): void;
        _malloc(size: number): number;
        _free(ptr: number): void;
    }

    const init: (moduleOverrides?: { wasmBinary?: Buffer | Uint8Array }) => Promise<WasmMatrixModule>;
    export default init;
}

