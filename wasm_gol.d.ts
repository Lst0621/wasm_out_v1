export {}; // ensure this .d.ts is treated as a module by TS

declare module "./wasm_gol" {
    export interface WasmGolModule {
        _gol_create(size: number): number;
        _gol_destroy(handle: number): void;
        _gol_init(handle: number): void;
        _gol_random_init(handle: number, live_prob: number): void;
        _gol_random_init_seed(handle: number, live_prob: number, seed: number): void;
        _gol_get_seed(handle: number): number;
        _gol_evolve(handle: number): void;
        _gol_set_topology(handle: number, mode: number): void;
        _gol_set_wormhole_seed(handle: number, seed: number): void;
        _gol_set_wormhole_count(handle: number, count: number): void;
        _gol_get_wormhole_edges(handle: number): number;
        _gol_set_cut_seed(handle: number, seed: number): void;
        _gol_set_cut_count(handle: number, count: number): void;
        _gol_get_cut_edges(handle: number): number;
        _gol_get_live_cells(handle: number, out_xy_ptr: number, max_count: number): number;
        _malloc(size: number): number;
        _free(ptr: number): void;
    }

    const init: (moduleOverrides?: { wasmBinary?: Buffer | Uint8Array }) => Promise<WasmGolModule>;
    export default init;
}

