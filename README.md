# Darkstone

Darkstone is a fork of [Blackstone](https://github.com/Blackstone-SS13/BLACKSTONE), a medieval fantasy roleplaying game built on the Space Station 13 codebase.

Come say hi on the [Discord](https://discord.gg/CHkEj3dq8z).

## Building

This is a BYOND project. BYOND is a 32 bit i386 application, so the runtime libraries it needs are i386 as well.

With Docker:

```
docker build -f Dockerfile.blackstone -t darkstone .
```

Without Docker, install BYOND 515 or later, compile `roguetown.dme` with DreamMaker, then host the resulting `roguetown.dmb` with DreamDaemon.

## Running

`config/` and `data/` are mounted at runtime, so server settings and round data live outside the repository. `compose.example.yml` is a working starting point.

## Contributing

Pull requests are welcome. Branch off `main`, keep each change focused on one thing, and check that `roguetown.dme` still compiles before opening the PR. Bug reports and suggestions go in the issue tracker.

## License

Darkstone is licensed under the GNU Affero General Public License v3. See [LICENSE](LICENSE).

Code inherited from Blackstone and Roguetown stays under that license. The full upstream commit history is preserved here, so original authorship remains intact.
