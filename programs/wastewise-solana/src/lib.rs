use anchor_lang::prelude::*;

declare_id!("5L9UbVeXGXwPh9xajNdySk3yGPqtX4dmpRUZiSb8B9kf");

#[program]
pub mod wastewise_solana {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
