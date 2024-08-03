{
  inputs = {
    nixpkgs = {
      url = "github:nixos/nixpkgs/nixpkgs-unstable";
    };
  };

  outputs = {nixpkgs, ...}: let 
    forAllSystems = function:
      nixpkgs.lib.genAttrs nixpkgs.lib.systems.flakeExposed
      (system: function nixpkgs.legacyPackages.${system});
    in {
      formatter = forAllSystems (pkgs: pkgs.alejandra);

      devShells = forAllSystems(pkgs: {
        default = pkgs.mkShell {
          buildInputs = with pkgs; [
            bun
            corepack
            nodejs_20
            nodePackages.json
          ];
        };
      });
    };
}
